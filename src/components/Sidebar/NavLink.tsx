import { LinkProps as ChakraLinkProps } from "@chakra-ui/core";
import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  iconType: ElementType;
}

export function NavLink({ iconType, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={iconType} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
