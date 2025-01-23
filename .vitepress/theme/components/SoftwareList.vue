<script setup>

const softwareCategories = [
  {
    title: '常用IDE',
    softwares: [
      {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        url: 'https://code.visualstudio.com/'
      },
      {
        name: 'IntelliJ IDEA',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
        url: 'https://www.jetbrains.com/idea/'
      },
      {
        name: 'PyCharm',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
        url: 'https://www.jetbrains.com/pycharm/'
      },
      {
        name: 'WebStorm',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg',
        url: 'https://www.jetbrains.com/webstorm/'
      },
      {
        name: 'Cursor',
        logo: 'https://cursor.sh/apple-touch-icon.png',
        url: 'https://cursor.sh/'
      },
      {
        name: 'Vim',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg',
        url: 'https://www.vim.org/'
      }
    ]
  },
  {

    title: '常用中间件',
    softwares: [
      {
        name: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        url: 'https://redis.io/'

      },

      {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        url: 'https://www.mysql.com/'
      },

      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        url: 'https://www.mongodb.com/'

      },

      {
        name: 'RabbitMQ',
        logo: 'https://skillicons.dev/icons?i=rabbitmq',
        url: 'https://www.rabbitmq.com/'
      },


      {
        name: 'Nginx',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
        url: 'https://nginx.org/'
      }
    ]
  },
  {
    title: '笔记工具',
    softwares: [
      {
        name: 'Notion',
        logo: 'https://www.notion.so/images/favicon.ico',
        url: 'https://www.notion.so/'
      },

      {
        name: 'Obsidian',
        logo: 'https://obsidian.md/images/obsidian-logo-gradient.svg',
        url: 'https://obsidian.md/'
      },

      {
        name: 'XMind',
        logo: 'https://cdn.worldvectorlogo.com/logos/xmind-1.svg',
        url: 'https://xmind.cn/'
      },

      {
        name: 'Typora',
        logo: 'https://cdn.worldvectorlogo.com/logos/typora.svg',
        url: 'https://typora.io/'
      },

    ]
  },

  {
    title: '视频工具',
    softwares: [
      {
        name: 'OBS Studio',
        logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/obsstudio.svg',
        url: 'https://obsproject.com/'
      },
      {
        name: 'ScreenToGif',
        logo: 'https://www.screentogif.com/logos/ms-icon-144x144.png',
        url: 'https://www.screentogif.com/'
      },
      {
        name: 'HandBrake',
        logo: 'https://handbrake.fr/img/logo.png',
        url: 'https://handbrake.fr/'
      }
    ]
  },

  {
    title: '浏览器',
    softwares: [
      {
        name: 'Chrome',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
        url: 'https://www.google.com/chrome/'
      },
      {
        name: 'Firefox',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg',
        url: 'https://www.mozilla.org/firefox/'
      },
      {
        name: 'Edge',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png',
        url: 'https://www.microsoft.com/edge'
      }
    ]
  },
  {
    title: '接口调试',
    softwares: [
      {
        name: 'Postman',
        logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
        url: 'https://www.postman.com/'

      },

      {
        name: 'Apifox',
        logo: 'https://cdn.apifox.cn/logo/apifox-logo-512.png',
        url: 'https://www.apifox.cn/'

      }
    ]
  },

  {
    title: '压缩工具',
    softwares: [
      {
        name: '7-Zip',
        logo: 'https://www.7-zip.org/7ziplogo.png',
        url: 'https://www.7-zip.org/'
      },
      {
        name: 'Bandizip',
        logo: 'https://www.bandisoft.com/img.front/bandizip_logo.png',
        url: 'https://www.bandisoft.com/bandizip/'
      },
      {
        name: 'WinRAR',
        logo: 'https://www.win-rar.com/uploads/pics/rar-archive-8_d8215f_12.png',
        url: 'https://www.win-rar.com/'
      }
    ]
  },

  {
    title: '设计画图',
    softwares: [
      {
        name: 'Figma',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        url: 'https://www.figma.com/'
      },
      {
        name: 'Photoshop',
        logo: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000',
        url: 'https://www.adobe.com/products/photoshop.html'
      },
      {
        name: 'SAI2',
        logo: 'https://www.sai2.com.cn/Public/home/images/logo2.png',
        url: 'https://www.sai2.com.cn/'
      },

      {
        name: 'Clip Studio Paint',
        logo: 'https://www.clipstudio.net/view/img/common/clipstudiopaint-icon.png',
        url: 'https://www.clipstudio.net/'
      },

      {
        name: 'Blender',
        logo: 'https://skillicons.dev/icons?i=blender',
        url: 'https://www.blender.org/'
      },

      {
        name: 'Maya',
        logo: 'https://cdn.worldvectorlogo.com/logos/maya-2017.svg',
        url: 'https://www.autodesk.com/products/maya/'
      },

      {
        name: '3ds Max',
        logo: 'https://cdn.worldvectorlogo.com/logos/3ds-max-full.svg',
        url: 'https://www.autodesk.com/products/3ds-max/'
      },
      {

        name: 'Aseprite',
        logo: 'https://www.aseprite.org/assets/images/favicon.png',
        url: 'https://www.aseprite.org/'

      },
      {
        name: 'Draw.io',
        logo: 'https://app.diagrams.net/images/icon-192.png',
        url: 'https://app.diagrams.net/'
      }
    ]
  },
  {
    title: '开发环境',
    softwares: [
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        url: 'https://git-scm.com/'
      },
      {
        name: 'GitHub',
        logo: 'https://skillicons.dev/icons?i=github',
        url: 'https://github.com/'
      },
      {

        name: 'Docker',
        logo: 'https://skillicons.dev/icons?i=docker',
        url: 'https://www.docker.com/'
      },

    ]
  },

  {
    title: '远程工具',
    softwares: [
      {
        name: 'TeamViewer',
        logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/teamviewer.svg',
        url: 'https://www.teamviewer.com/'
      },
      {
        name: 'ToDesk',
        logo: 'https://www.todesk.com/dist/img/0a54c32.png',
        url: 'https://www.todesk.com/'
      }
    ]
  }
]
</script>

<template>
  <div class="software-list">
    <div v-for="category in softwareCategories" :key="category.title">
      <h2 class="software-category">{{ category.title }}</h2>
      <div class="software-grid">
        <a
            v-for="software in category.softwares"
            :key="software.name"
            :href="software.url"
            target="_blank"
            rel="noopener noreferrer"
            class="software-item"
        >
          <img :src="software.logo" :alt="software.name" class="software-logo">
          <div class="software-name">{{ software.name }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.software-list {
  padding: 1rem;
}

.software-category {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.software-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.software-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
}

.software-item:hover {
  transform: translateY(-2px);
  background: var(--vp-c-bg-mute);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.software-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  filter: grayscale(0.1);
  transition: all 0.2s ease;
}

.software-item:hover .software-logo {
  filter: none;
  transform: scale(1.05);
}

.software-name {
  text-align: center;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}
</style>