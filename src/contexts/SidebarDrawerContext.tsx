import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

interface SidebarDrawerContextProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerContextProps) {
  const disclosure = useDisclosure();
  const { onClose } = disclosure;
  const router = useRouter();

  useEffect(() => {
    onClose();
  }, [onClose, router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
