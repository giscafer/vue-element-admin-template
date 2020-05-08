import Mock from 'mockjs';

const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      createTime: +Mock.Random.date('T'),
      account: '@first',
      companyName: '@title(5, 10)',
      accessKey: '@first',
      secret: '@first',
      'status|1': ['freeze', 'unfreeze']
    })
  );
}

export default [
  {
    url: '/vue-element-admin/user/list',
    type: 'get',
    response: config => {
      const { account, page = 1, limit = 10, sort } = config.query;

      let mockList = List.filter(item => {
        if (account && item.account !== account) return false;
        return true;
      });

      if (sort === '-id') {
        mockList = mockList.reverse();
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      );

      return {
        code: 2000,
        data: {
          total: mockList.length,
          items: pageList
        }
      };
    }
  },

  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query;
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 2000,
            data: article
          };
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 2000,
        data: 'success'
      };
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 2000,
        data: 'success'
      };
    }
  }
];
