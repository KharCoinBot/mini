import { Welcome } from '../components/Welcome/Welcome';
import { Container } from '@mantine/core';

export function HomePage() {
  return (
    <>
    <Container>
      <Welcome />
    </Container>
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
