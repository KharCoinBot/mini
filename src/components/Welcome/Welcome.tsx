import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import FooterMenu from '../FooterMenu/FooterMenu';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        به{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          خرکوین
        </Text>{' '}
        خوش آمدید
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        اینجا همه چی خر تو خره! یه کم صبر کنید بازی کلیکی هم راه میندازیم که خرمون جفتک بندازه و
        خرکوین جمع کنیم
      </Text>
    </>
  );
}
