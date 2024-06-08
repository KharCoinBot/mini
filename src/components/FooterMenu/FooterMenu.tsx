import { Container, Flex, Tabs, UnstyledButton, rem } from '@mantine/core';
import { IconCoin, IconStar, IconFriends, IconCat, IconHome2, IconBolt, IconGift, IconDeer } from '@tabler/icons-react';

function FooterMenu() {
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
      mih={70}
      // gap="xs"
      justify="center"
      direction="row"
      wrap="nowrap"
      align="center"
    >
      {/* <Link to={'/'}> */}
        <UnstyledButton
          size="xs"
          mr={'xs'}
          ml={'xs'}
          mt={'xs'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconCoin style={{ width: rem(15), height: rem(15) }} />
          <br />
          درآمد
        </UnstyledButton>

        <UnstyledButton
          size="xs"
          mr={'xs'}
          ml={'xs'}
          mt={'xs'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconBolt style={{ width: rem(15), height: rem(15) }} />
          <br />
          تقویت
        </UnstyledButton>

        <UnstyledButton
          // mr={'xs'}
          mr={'xl'}
          ml={'xl'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconDeer style={{ width: rem(33), height: rem(33) }} />
          <br />
          بازی
        </UnstyledButton>

        <UnstyledButton
          size="xs"
          mr={'xs'}
          ml={'xs'}
          mt={'xs'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconFriends style={{ width: rem(15), height: rem(15) }} />
          <br />
          دوستان
        </UnstyledButton>

        <UnstyledButton
          size="xs"
          mr={'xs'}
          ml={'xs'}
          mt={'xs'}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <IconGift style={{ width: rem(15), height: rem(15) }} />
          <br />
          جایزه
        </UnstyledButton>

      {/* </Link> */}
    </Flex>
    </Container>
  );
}

export default FooterMenu;
