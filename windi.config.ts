

export default {
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-[#121212] dark:text-[#ddd]',
  },
  theme: {
    extend: {
      colors: {
        primary: '#23a7cf',
        primarydark: '#1b90b4',
        error: '#ff5252',
        errordark: '#d43535',
      },
      alias: {
        'hstack': 'flex items-center',
        'vstack': 'flex flex-col',
        'icon': 'w-6 h-6 fill-current',
        'app': 'text-red',
        'app-border': 'border-gray-200 dark:border-dark-300',
      },
    }
  }
}