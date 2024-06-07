import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Flex, UnstyledButton, rem } from '@mantine/core';
import { IconUserShare, IconWallet } from '@tabler/icons-react';

function HeaderMenu() {
  // const navigate = useNavigate();
  // const { tabValue } = useParams();

  return (
    // <Tabs 
    //     variant="pills"
    //     // value={tabValue}
    //     // onChange={(value) => navigate(`/${value}`)}
    //     style={{ position: 'fixed', bottom: 0, width: '100%' }} 
    //     inverted
    // >
    //     <Tabs.List grow>
    //         <Tabs.Tab value="Earn"      leftSection={<IconCoin size={16} />} >
    //           <Link to={'/Game'}>درآمد</Link>
    //         </Tabs.Tab>
    //         <Tabs.Tab value="Boosts"    leftSection={<IconStar size={16} />} >
    //           <Link to={'/Game'}>تقویت</Link>
    //         </Tabs.Tab>
    //         <Tabs.Tab value="Game"      leftSection={<IconStar size={16} />} >
    //           <Link to={'/Game'}>بازی</Link>
    //         </Tabs.Tab>
    //         <Tabs.Tab value="Friends"   leftSection={<IconFriends size={16} />} >
    //           <Link to={'/Game'}>دوستان</Link>
    //         </Tabs.Tab>
    //         <Tabs.Tab value="Gifts"      leftSection={<IconCat size={16} />} >
    //           <Link to={'/Game'}>جایزه</Link>
    //         </Tabs.Tab>
    //     </Tabs.List>      
    // </Tabs>
    <Container size={'xs'}>
    <Flex
      mih={60}
      gap="xs"
      justify="flex-end"
      align="center"
      direction="row"
    // wrap="wrap"
    >
      {/* <Link to={'/'}> */}
        <UnstyledButton
          mr={'xs'}
          ml={'xs'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconUserShare style={{ width: rem(24), height: rem(24) }} />
        </UnstyledButton>

        <UnstyledButton
          mr={'xs'}
          ml={'xs'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconWallet style={{ width: rem(24), height: rem(24) }} />
        </UnstyledButton>

      {/* </Link> */}
    </Flex>
    </Container>
  );
}

export default HeaderMenu;
