import {
  IconBrandTelegram,
  IconBrandYoutube,
  IconCircleCheck,
  IconCircleDashed,
  IconInfoCircle,
} from '@tabler/icons-react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { AppShell, Blockquote, Container, List, ThemeIcon, Title, rem } from '@mantine/core';
import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';
import { API_CONFIG } from '../config/apiConfig';

import {ITaskType, ITask} from '../config/interfaces';

export function EarnPage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  
  const [taskstypes, setTaskstypes] = useState<ITaskType[]>([]);

  useEffect(() => {
    // Fetch tasks from the API
    fetch(`${API_CONFIG.API_BASE_URL}tasks/types`)
      .then(response => response.json())
      .then(data => setTaskstypes(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);


  const [taskDetails, setTaskDetails] = useState<{ [key: number]: ITask[] }>({});

useEffect(() => {
  const fetchDataForEachTaskType = async () => {
    const promises = taskstypes.map(async (taskType) => { // Use taskType instead of task
      const response = await fetch(`${API_CONFIG.API_BASE_URL}tasks/bytype/${taskType.TypeID}`);
      const data = await response.json();
      return { taskID: taskType.TypeID, details: data };
    });
    const results = await Promise.all(promises);
    const formattedResults = results.reduce<{ [key: number]: ITask[] }>((acc, curr) => {
      acc[curr.taskID] = curr.details;
      return acc;
    }, {});
    setTaskDetails(formattedResults);
  };

  fetchDataForEachTaskType().catch(console.error);
}, [taskstypes]);

  return (
    <Container size={'xs'}>
      <AppShell header={{ height: 40 }} footer={{ height: 70 }} withBorder={false}>
        <AppShell.Header>
          <HeaderMenu
            username={user?.username ?? 'KC'}
            photoUrl={user?.photo_url ?? `${API_CONFIG.ASSETS_URL}assets/images/kharcoin.jpg`}
          />
        </AppShell.Header>
        <AppShell.Main>
          <Container>
            <Title order={1}>درآمد</Title>

            {taskstypes.map(task => (
            <Blockquote
              key={task.TypeID}
              color={task.TaskColor} // Adjust the color as needed
              cite={`#${task.TypeID}`}
              icon={<IconInfoCircle />}
              mt="xl"
            >
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color={task.TaskColor} size={16} radius="xl" mr={'lg'}></ThemeIcon>
                }
              >
                <List.Item
                  
                  icon={
                    <ThemeIcon color="green" size={24} radius="xl">
                      <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  {`${task.TaskType}: ${task.TaskCount}`}
                </List.Item>

                {taskDetails[task.TypeID]?.length > 0 ? (
                  taskDetails[task.TypeID].map(detail => (
                    <List.Item key={detail.id}>{`${detail.name}: ${detail.reward} خرتومن`}</List.Item>
                  ))
                ) : (
                  <List.Item>وظیفه‌ای موجود نیست.</List.Item>
                )}
              </List>
            </Blockquote>
          ))}
          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <FooterMenu />
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
}
