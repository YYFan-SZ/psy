// 批量更新logo路径的脚本
const fs = require('fs');
const path = require('path');

// 读取index.html文件
const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 定义logo名称映射
const logoMap = {
  'Coursera': 'coursera',
  'MIT OpenCourseWare': 'mit',
  'Harvard University': 'harvard',
  'UC Berkeley': 'berkeley',
  'OpenStax': 'opensource',
  'Noba Project': 'noba',
  'OLI': 'openlearning',
  'CrashCourse': 'crashcourse',
  'Simply Psychology': 'simplypsychology',
  'Verywell Mind': 'verywellmind',
  'Yale': 'yale',
  'edX': 'edX',
  '16Personalities': '16personalities',
  'APA': 'apa',
  'SRCD': 'SRCD'
};

// 替换所有远程图片URL为本地路径
Object.keys(logoMap).forEach(name => {
  const regex = new RegExp(`<img src="https?://[^"]*" alt="${name}[^"]*">`, 'g');
  content = content.replace(regex, `<img src="logo/${logoMap[name]}.png" alt="${name} Logo">`);
});

// 写回文件
fs.writeFileSync(filePath, content);
console.log('所有logo路径已更新为本地路径');