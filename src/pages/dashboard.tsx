import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-10-01T00:00:00.00Z',
      '2022-10-02T00:00:00.00Z',
      '2022-10-03T00:00:00.00Z',
      '2022-10-04T00:00:00.00Z',
      '2022-10-05T00:00:00.00Z',
      '2022-10-06T00:00:00.00Z',
      '2022-10-07T00:00:00.00Z'
    ]
  },
  fill: {
    colors: [theme.colors.orange[500]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  stroke: {
    colors: [theme.colors.orange[500]]
  }
};

const series = [{ name: 'series1', data: [587, 230, 289, 17, 90, 298, 982] }];

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    setShowChart(true);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard | Dashgo</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" mx="auto" px="6" maxW={1480}>
          <Sidebar />

          <SimpleGrid flex="1" alignItems="flex-start" minChildWidth="320px" gap="4">
            <Box bg="gray.800" p={['6', '8']} pb="4" borderRadius={8}>
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>

              {showChart && <Chart options={options} series={series} type="area" height={160} />}
            </Box>
            <Box bg="gray.800" p={['6', '8']} pb="4" borderRadius={8}>
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>

              {showChart && <Chart options={options} series={series} type="area" height={160} />}
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
