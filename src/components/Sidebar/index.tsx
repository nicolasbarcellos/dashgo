import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink iconType={RiDashboardLine}>Dashboard</NavLink>
          <NavLink iconType={RiContactsLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink iconType={RiInputMethodLine}>Automação</NavLink>
          <NavLink iconType={RiGitMergeLine}>Formulários</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
