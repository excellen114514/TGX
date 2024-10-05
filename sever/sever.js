const express = require('express');
const path = require('path');

const app = express();

// 设置静态文件夹，这里我们假设index.html位于项目根目录
app.use(express.static(path.join(__dirname)));

// 路由到yid.html文件
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'yid.html'));
});

// 监听端口3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
