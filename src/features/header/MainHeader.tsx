import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandGithub,
  IconChevronDown,
  IconCode,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import classes from "./MainHeader.module.css";

const gravatarUrl =
  "https://gravatar.com/avatar/e46743c09a0120ad6772e8e2690180f2";

const linkData = [
  {
    icon: IconCode,
    title: "Project1",
    description: "Description of project 1",
  },
];

export default function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const theme = useMantineTheme();

  const links = linkData.map((link) => (
    <UnstyledButton className={classes.subLink} key={link.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <link.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {link.title}
          </Text>
          <Text size="xs" c="dimmed">
            {link.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" visibleFrom="sm">
            <Image
              style={{ padding: "10px" }}
              src={gravatarUrl}
              h="100%"
              fit="contain"
              alt="Gravatar"
              radius="xl"
            />
            <Text size="xl" fw={700}>
              Spencer Kocot
            </Text>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Home
              </a>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Projects
                      </Box>
                      <IconChevronDown size={16} color={theme.colors.blue[6]} />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Projects</Text>
                    <Anchor href="#" fz="xs">
                      View All
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Want more?
                        </Text>
                        <Text size="xs" c="dimmed">
                          Check out my other projects on GitHub.
                        </Text>
                      </div>
                      <Button w="auto" variant="default" radius="xl">
                        <a href="https://github.com/spocot" target="_blank">
                          <IconBrandGithub color={theme.colors.blue[6]} />
                        </a>
                      </Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              <a href="#" className={classes.link}>
                About
              </a>
              <a href="#" className={classes.link}>
                Contact
              </a>
            </Group>
          </Group>

          <Group visibleFrom="sm">
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              size="lg"
              variant="default"
              title="Toggle color scheme"
              aria-label="Toggle color scheme"
            >
              <IconSun className={`${classes.icon} ${classes.light}`} />
              <IconMoon className={`${classes.icon} ${classes.dark}`} />
            </ActionIcon>
          </Group>

          <Burger opened={false} onClick={() => {}} hiddenFrom="sm" />
        </Group>
      </header>
    </Box>
  );
}
