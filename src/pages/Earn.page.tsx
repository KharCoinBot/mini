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

interface TaskType {
  TypeID: number; // Assuming TypeID is a number, adjust the type accordingly
  TaskType: string;
  TaskCount: number;
  TaskColor: string;
}

interface Task {
  id: number;
  name: string;
  expired: number;
  type: number;
  link: string;
  reward: number;
}

export function EarnPage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  
  const [taskstypes, setTaskstypes] = useState<TaskType[]>([]);

  useEffect(() => {
    // Fetch tasks from the API
    fetch('https://api.kharcoin.info/api/tasks/types')
      .then(response => response.json())
      .then(data => setTaskstypes(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);


  const [taskDetails, setTaskDetails] = useState<{ [key: number]: Task[] }>({});

useEffect(() => {
  const fetchDataForEachTaskType = async () => {
    const promises = taskstypes.map(async (taskType) => { // Use taskType instead of task
      const response = await fetch(`https://api.kharcoin.info/api/tasks/bytype/${taskType.TypeID}`);
      const data = await response.json();
      return { taskID: taskType.TypeID, details: data };
    });
    const results = await Promise.all(promises);
    const formattedResults = results.reduce<{ [key: number]: Task[] }>((acc, curr) => {
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
            photoUrl={user?.photo_url ?? 'https://kc.rahomaskan.com/assets/images/kharcoin.jpg'}
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


            {/* <Blockquote
              color="yellow"
              cite="درآمد ویژه : کانال خرکوین"
              icon={<IconInfoCircle />}
              mt="xl"
            >
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconBrandTelegram style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                <List.Item>50 خرتومن : کانال خر کوین</List.Item>
              </List>
            </Blockquote>

            <Blockquote
              color="green"
              cite="درآمد جدید : کانالهای تلگرام"
              icon={<IconInfoCircle />}
              mt="xl"
            >
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconBrandTelegram style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                <List.Item>10 خرتومن : گروه خر کوین</List.Item>
                <List.Item>50 خرتومن : کانال نوبیتکس</List.Item>
                <List.Item>30 خرتومن : کانال جاوید</List.Item>
              </List>
            </Blockquote>

            <Blockquote
              color="green"
              cite="درآمد جدید : کانالهای یوتیوب"
              icon={<IconInfoCircle />}
              mt="xl"
            >
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="red" size={24} radius="xl">
                    <IconBrandYoutube style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                <List.Item>10 خرتومن : کانال خران</List.Item>
                <List.Item>10 خرتومن : کانال خران</List.Item>
                <List.Item>10 خرتومن : کانال خران</List.Item>
                <List.Item>10 خرتومن : کانال خران</List.Item>
              </List>
            </Blockquote>

            <Blockquote color="red" cite="درآمدهای قبلی" icon={<IconInfoCircle />} mt="xl">
              <List
                spacing="xs"
                size="sm"
                center
                icon={
                  <ThemeIcon color="red" size={24} radius="xl">
                    <IconBrandYoutube style={{ width: rem(16), height: rem(16) }} />
                  </ThemeIcon>
                }
              >
                <List.Item>خربازی</List.Item>
                <List.Item>خربازی</List.Item>
                <List.Item>خربازی</List.Item>
                <List.Item>خربازی</List.Item>
              </List>
            </Blockquote> */}
          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <FooterMenu />
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
}
