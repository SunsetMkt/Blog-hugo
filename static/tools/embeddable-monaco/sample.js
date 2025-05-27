// 创建一个简单的示例文件用于测试
console.log('这是一个示例 JavaScript 文件');

function helloWorld() {
  return 'Hello, World!';
}

// 一些基本的 JavaScript 代码
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// 测试对象
const person = {
  name: '张三',
  age: 30,
  greet() {
    return `你好，我是${this.name}，今年${this.age}岁。`;
  }
};

// 异步函数示例
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('获取数据失败:', error);
    return null;
  }
}

// 导出一些内容
export { helloWorld, person, fetchData };
