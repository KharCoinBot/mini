import { Container, Flex, Tabs, UnstyledButton, rem } from '@mantine/core';
import { IconCoin, IconStar, IconFriends, IconCat, IconHome2, IconBolt, IconGift, IconDeer } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
function FooterMenu() {
  return (
    <Container size={'xs'}>
      <Flex
        mih={70}
        justify="center"
        direction="row"
        wrap="nowrap"
        align="center"
      >
        <Link to="/Earn">
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
        </Link>


        <Link to="/Boosts">
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
        </Link>

        <Link to="/Game">
          <UnstyledButton
            mr={'xl'}
            ml={'xl'}
            style={{ textAlign: 'center', color: 'white' }}
          >
            <IconDeer style={{ width: rem(33), height: rem(33) }} />
            <br />
            بازی
          </UnstyledButton>
        </Link>
        
        <Link to="/Friends">
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
        </Link>

        <Link to="/Gifts">
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

        </Link>
      </Flex>
    </Container>
  );
}

export default FooterMenu;
