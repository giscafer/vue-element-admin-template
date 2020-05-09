import Layout from '@/layout';

const demoRouter = {
  path: '/demo',
  component: Layout,
  redirect: '/demo/sino-table',
  name: 'Demo',
  meta: {
    title: 'Demo',
    icon: 'table'
  },
  children: [
    {
      path: 'sino-table',
      component: () => import('@/views/demo/sino-table/index'),
      name: 'SinoTable Demo',
      meta: { title: 'SinoTable Demo' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: 'Drag Table' }
    }
  ]
};
export default demoRouter;
