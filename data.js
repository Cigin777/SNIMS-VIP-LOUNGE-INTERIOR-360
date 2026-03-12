var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3526277468315051,
        "pitch": 0.019468475319683876,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.14162207510477032,
          "pitch": -0.0037973043374108784,
          "rotation": 0,
          "target": "1-left-corner"
        },
        {
          "yaw": 2.9642990763054327,
          "pitch": 0.03842300063701387,
          "rotation": 0,
          "target": "3-right-corner"
        },
        {
          "yaw": 0.18826024117939966,
          "pitch": 0.11496004350127365,
          "rotation": 4.71238898038469,
          "target": "5-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-left-corner",
      "name": "LEFT CORNER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.26001843958283644,
        "pitch": 0.024335594149604844,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 1.6474566337899805,
          "pitch": 0.09902007932327983,
          "rotation": 0,
          "target": "2-left-corner"
        },
        {
          "yaw": 2.6817863894901244,
          "pitch": 0.13629962506326976,
          "rotation": 0,
          "target": "5-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-left-corner",
      "name": "LEFT CORNER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5129130863003795,
        "pitch": 0.07544501398421133,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 1.4703014032272348,
          "pitch": 0.04851269737274144,
          "rotation": 6.283185307179586,
          "target": "1-left-corner"
        },
        {
          "yaw": -0.36486521707739605,
          "pitch": 0.05347557423526439,
          "rotation": 0,
          "target": "5-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-right-corner",
      "name": "RIGHT CORNER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1798757698483726,
        "pitch": 0.014597039285042968,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 1.1735700122861044,
          "pitch": 0.03938144689465162,
          "rotation": 0,
          "target": "4-right-corner"
        },
        {
          "yaw": 0.5361679089847016,
          "pitch": 0.03236182741544624,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-right-corner",
      "name": "RIGHT CORNER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16930263775417131,
        "pitch": -0.06612420313905076,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.48998042498233296,
          "pitch": 0.042732291189063076,
          "rotation": 0,
          "target": "3-right-corner"
        },
        {
          "yaw": 1.0424762148584676,
          "pitch": 0.07702258298206566,
          "rotation": 1.5707963267948966,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-reception",
      "name": "RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.35706676974622376,
          "pitch": 0.14475419251703414,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 2.429034594229848,
          "pitch": 0.015537967895287608,
          "rotation": 0,
          "target": "1-left-corner"
        },
        {
          "yaw": -2.909375641746969,
          "pitch": 0.033043010030093356,
          "rotation": 0,
          "target": "2-left-corner"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SNIMS VIP LOUNGE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
