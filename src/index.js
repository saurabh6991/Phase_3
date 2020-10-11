import G6 from '@antv/g6';

const data = {
  /* defining nodes and combos */
  nodes: [
    {
      id: 'a1',
      comboId: 'a',
      label: 'Orders',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
    {
      id: 'a2',
      comboId: 'a',
      label: 'Shipping Info',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
    {
      id: 'a3',
      comboId: 'a',
      label: 'Serial #',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
    {
      id: 'b1',
      comboId: 'b',
      label: 'Orders',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
    {
      id: 'b2',
      comboId: 'b',
      label: 'Shipping Info',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
    {
      id: 'b3',
      comboId: 'b',
      label: 'Serial #',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
    {
      id: 'b4',
      comboId: 'b',
      label: 'Install Base',
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        }
      }
    },
  ],
  edges: [
    {
      source: 'a1',
      target: 'b1',
      label: 'table-to-table',
      size: 0.5,
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        },
      },
      style: {
        stroke: 'black',
      },
    },
    {
      source: 'a2',
      target: 'b2',
      label: 'table-to-table',
      size: 0.5,
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        },
      },
      style: {
        stroke: 'black',
      },
    },

    {
      source: 'a3',
      target: 'b3',
      label: 'table-to-table',
      size: 0.5,
      labelCfg: {
        autoRotate: true,
        style: {
          stroke: '#fff',
          lineWidth: 5,
          fontSize: 10,
        },
      },
      style: {
        stroke: 'black',
      },
    },

    {
      source: 'b1',
      target: 'b4',
    },
    {
      source: 'b2',
      target: 'b4',
    },
    {
      source: 'b3',
      target: 'b4',
    },
    
  ],
  combos: [
    {
      id: 'a',
      label: 'CG1',
    },
    {
      id: 'b',
      label: 'C3',
    },
  ],
};

const width = document.getElementById('container').scrollWidth;
const height = document.getElementById('container').scrollHeight || 500;
const graph = new G6.Graph({
  container: 'container',
  width,
  height,
  fitView: true,
  fitViewPadding: 50,
  layout: {
    type: 'comboForce',
    nodeSpacing: (d) => 8,
  },
  defaultNode: {
    size: 15,
    color: '#5B8FF9',
    style: {
      lineWidth: 2,
      fill: '#C6E5FF',
    },
  },
  defaultEdge: {
    size: 2,
    color: '#e2e2e2',
  },
  modes: {
    default: ['drag-combo', 'drag-node', 'drag-canvas', 'zoom-canvas'],
  },
});

graph.data(data);
graph.render();
