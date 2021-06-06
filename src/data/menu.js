export default [
  {
    id: 1,
    title: "菜单1"
  },
  {
    id: 2,
    title: "菜单2",
    children: [
      {
        id: 21,
        title: "菜单2-1",

      },
      {
        id: 21,
        title: "菜单2-2"
      },
      {
        id: 23,
        title: "菜单2-3"
      }
    ]
  },
  {
    id: 3,
    title: "菜单3",
    children: [
      {
        id: 31,
        title: "菜单3-1"
      },
      {
        id: 32,
        title: "菜单3-2"
      },
      {
        id: 33,
        title: "菜单3-3",
        children: [
          {
            id: 331,
            title: "菜单3-3-1",
            children: [
              {
                id: 3311,
                title: "菜单3-3-1-1",
                children: [
                  {
                    id: 33111,
                    title: "菜单3-3-1-1-1"
                  },
                  {
                    id: 33112,
                    title: "菜单3-3-1-1-2"
                  },
                  {
                    id: 33113,
                    title: "菜单3-3-1-1-3"
                  },
                ]
              },
              {
                id: 3312,
                title: "菜单3-3-1-2"
              },
              {
                id: 3313,
                title: "菜单3-3-1-3"
              },
            ]
          },
          {
            id: 311,
            title: "菜单3-3-2"
          },
          {
            id: 313,
            title: "菜单3-3-3"
          }
        ]
      },
    ]
  },
  {
    id: 4,
    title: "菜单4"
  },
  {
    id: 5,
    title: "菜单5"
  },
  {
    id: 6,
    title: "菜单6",
    children: [
      {
        id: 61,
        title: "菜单6-1"
      },
      {
        id: 62,
        title: "菜单6-2"
      },
      {
        id: 63,
        title: "菜单6-3",
        children: [
          {
            id: 631,
            title: "菜单6-3-1",
            children: [
              {
                id: 6311,
                title: "菜单6-3-1-1",
                children: [
                  {
                    id: 63111,
                    title: "菜单6-3-1-1-1"
                  },
                  {
                    id: 63112,
                    title: "菜单6-3-1-1-2"
                  },
                  {
                    id: 63113,
                    title: "菜单6-3-1-1-3",
                    children: [
                      {
                        id: 631131,
                        title: "菜单6-3-1-1-3-1"
                      },
                      {
                        id: 631132,
                        title: "菜单6-3-1-1-3-2"
                      },
                      {
                        id: 631133,
                        title: "菜单6-3-1-1-3-3"
                      },
                    ]
                  }
                ]
              },
              {
                id: 6312,
                title: "菜单6-3-1-2"
              },
              {
                id: 6313,
                title: "菜单6-3-1-3"
              },
            ]
          },
          {
            id: 611,
            title: "菜单6-3-2"
          },
          {
            id: 613,
            title: "菜单6-3-3"
          }
        ]
      },
    ]
  }
]