<template>
  <div>
    <!-- 这里为了展示以下上传文件的信息 -->
    <el-button @click="download">down</el-button>
    <el-button @click="getFile">getFile</el-button>
    <div class="file-list-container">
      <div class="header">
        <h2>📁 文件列表</h2>
        <button @click="getFile" class="fetch-button">获取文件列表</button>
      </div>
      <transition-group name="list" tag="ul" class="file-list">
        <li v-for="(file, index) in fileList" :key="index" class="file-item">
          <div class="file-info">
            <span class="file-icon">📄</span>
            <span class="file-name">{{ file }}</span>
          </div>
          <button class="download-button" @click="download(file)">下载</button>
        </li>
      </transition-group>
      <p v-if="fileList.length === 0" class="empty-text">暂无文件</p>
    </div>
  </div>
</template>

<script>
import { downloadFile, getFiles } from "@/api/index.js";

export default {
  name: "FileUpload",
  data() {
    return {
      fileList: [],
      fileInfo: null, // Store the selected file info
    };
  },
  methods: {
    async getFile() {
      let res = await getFiles();
      console.log(res);
      this.fileList = res.files;
    },
    async download(filename) {
      try {
        let res = await downloadFile(filename);
        console.log(res);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (error) {
        console.error("Download failed:", error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.file-list-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* 标题和按钮 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  font-size: 20px;
  margin: 0;
}

.fetch-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.fetch-button:hover {
  background-color: #0056b3;
}

/* 列表样式 */
.file-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #fff;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.file-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.file-info {
  display: flex;
  align-items: center;
}

.file-icon {
  margin-right: 8px;
  font-size: 18px;
}

.file-name {
  font-size: 16px;
  color: #333;
}

/* 下载按钮样式 */
.download-button {
  padding: 6px 12px;
  font-size: 14px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #218838;
}

/* 空列表文本样式 */
.empty-text {
  text-align: center;
  color: #aaa;
  font-size: 14px;
  margin-top: 20px;
}

/* 动画效果 */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
