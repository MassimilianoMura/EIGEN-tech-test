'use strict';

MassiTechTest.controller('secondCtrl', function($scope) {

  $scope.chartGeneral = {
  'type': 'ColumnChart',
  'displayed': false,
  'data': {
    'cols': [
      {
        'id': 'region-id',
        'label': 'regions',
        'type': 'string',
        'p': {}
      },
      {
        'id': 'apples-id',
        'label': 'Apples',
        'type': 'number',
        'p': {}
      },
      {
        'id': 'oranges-id',
        'label': 'Oranges',
        'type': 'number',
        'p': {}
      },
      {
        'id': 'bananas-id',
        'label': 'Bananas',
        'type': 'number',
        'p': {}
      },
      {
        'id': 'Peaches-id',
        'label': 'Peaches',
        'type': 'number',
        'p': {}
      }
    ],
    'rows': [
      {
        'c': [
          {
            'v': 'North'
          },
          {
            'v': 20237
          },
          {
            'v': 207
          },
          {
            'v': 2037
          },
          {
            'v': 0
          }
        ]
      },
      {
        'c': [
          {
            'v': 'South'
          },
          {
            'v': 19947
          },
          {
            'v': 199
          },
          {
            'v': 1997
          },
          {
            'v': 310
          }
        ]
      },
      {
        'c': [
          {
            'v': 'East'
          },
          {
            'v': 0
          },
          {
            'v': 545
          },
          {
            'v': 5245
          },
          {
            'v': 200
          }
        ]
      },
      {
        'c': [
          {
            'v': 'West'
          },
          {
            'v': 12479
          },
          {
            'v': 479
          },
          {
            'v': 2479
          },
          {
            'v': 0
          }
        ]
      },
      {
        'c': [
          {
            'v': 'Central'
          },
          {
            'v': 40405
          },
          {
            'v': 402
          },
          {
            'v': 4045
          },
          {
            'v': 210
          }
        ]
      }
    ]
  },
  'options': {
    'title': 'Total fruit count per region',
    'isStacked': 'true',
    'fill': 20,
    'displayExactValues': true,
    'vAxis': {
      'title': 'Count',
      'gridlines': {
        'count': 10
      }
    },
    'hAxis': {
      'title': 'Regions'
    }
  },
  'formatters': {}
};

  $scope.chartBananas = {};

  $scope.chartBananas.type = 'PieChart';

  $scope.chartBananas.data = {'cols': [
      {id: 't', label: 'Fruits', type: 'string'},
      {id: 's', label: 'Quantity', type: 'number'}
  ], 'rows': [
      {c: [
          {v: 'East'},
          {v: 5245},
      ]},
      {c: [
          {v: 'West'},
          {v: 2479}
      ]},
      {c: [
          {v: 'South'},
          {v: 1997},
      ]},
      {c: [
          {v: 'North'},
          {v: 2037},
      ]},
      {c: [
          {v: 'Central'},
          {v: 4045},
      ]}
  ]};

  $scope.chartBananas.options = {
      'title': 'Bananas\' count for region'
  };


  $scope.chartPeaches = {};

  $scope.chartPeaches.type = 'PieChart';

  $scope.chartPeaches.data = {'cols': [
      {id: 't', label: 'Fruits', type: 'string'},
      {id: 's', label: 'Quantity', type: 'number'}
  ], 'rows': [
      {c: [
          {v: 'East'},
          {v: 200},
      ]},
      {c: [
          {v: 'South'},
          {v: 310}
      ]},
      {c: [
          {v: 'Central'},
          {v: 210},
      ]}
  ]};

  $scope.chartPeaches.options = {
      'title': 'Peaches\' count for region'
  };


  $scope.chartApples = {};

  $scope.chartApples.type = 'PieChart';

  $scope.chartApples.data = {'cols': [
      {id: 't', label: 'Fruits', type: 'string'},
      {id: 's', label: 'Quantity', type: 'number'}
  ], 'rows': [
      {c: [
          {v: 'West'},
          {v: 12479},
      ]},
      {c: [
          {v: 'South'},
          {v: 19947}
      ]},
      {c: [
          {v: 'North'},
          {v: 20237},
      ]},
      {c: [
          {v: 'Central'},
          {v: 40405},
      ]}
  ]};

  $scope.chartApples.options = {
      'title': 'Apples\' count for region'
  };


  $scope.chartOranges = {};

  $scope.chartOranges.type = 'PieChart';

  $scope.chartOranges.data = {'cols': [
      {id: 't', label: 'Fruits', type: 'string'},
      {id: 's', label: 'Quantity', type: 'number'}
  ], 'rows': [
      {c: [
          {v: 'East'},
          {v: 545},
      ]},
      {c: [
          {v: 'West'},
          {v: 479}
      ]},
      {c: [
          {v: 'South'},
          {v: 199},
      ]},
      {c: [
          {v: 'North'},
          {v: 207},
      ]},
      {c: [
          {v: 'Central'},
          {v: 402},
      ]}
  ]};

  $scope.chartOranges.options = {
      'title': 'Oranges\' count for region'
  };

});