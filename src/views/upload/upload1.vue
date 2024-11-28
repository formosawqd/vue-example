<template>
  <a-card title="多文件上传" bordered :style="cardStyle">
    <a-upload
      :before-upload="beforeUpload"
      :custom-request="customRequest"
      :show-upload-list="false"
      :multiple="true"
    >
      <a-button type="primary" icon="upload" block>
        <span>点击上传</span>
      </a-button>
    </a-upload>

    <div v-if="previewFiles.length > 0" class="preview-container">
      <h3>文件预览：</h3>
      <div style="display: flex">
        <div
          v-for="(file, index) in previewFiles"
          :key="index"
          class="preview-item"
        >
          <div v-if="file.isImage">
            <img :src="file.preview" alt="file-preview" class="preview-image" />
          </div>
          <div v-else>
            <p><strong>文件名：</strong>{{ file.name }}</p>
            <p><strong>文件大小：</strong>{{ file.size }} bytes</p>
          </div>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script>
import { uploadFile } from "@/api/index.js";

export default {
  data() {
    return {
      previewFiles: [], // 存储预览的文件信息
      fileList: [],
    };
  },
  methods: {
    // 文件上传前的处理
    beforeUpload(file) {
      // console.log(file);
      this.fileList.push(file);

      // 附加文件的基本信息（文件名、大小、类型）
      const fileInfo = {
        name: file.name,
        size: file.size,
        isImage: file.type.startsWith("image/"),
        preview: null,
      };

      // 使用 FileReader 读取文件并生成预览
      const reader = new FileReader();
      reader.onload = (e) => {
        fileInfo.preview = e.target.result;
        // 将文件信息存储到 previewFiles 中
        this.previewFiles.push(fileInfo);
        console.log(" this.previewFiles", this.previewFiles);
      };
      reader.readAsDataURL(file); // 以 Base64 格式读取文件

      return true; // 允许上传
    },

    // 自定义上传处理方法
    customRequest({ file, onSuccess, onError }) {
      console.log(file);
      const formData = new FormData();
      formData.append("files", file);
      uploadFile(formData).then((res) => {
        console.log(res);
        this.$message.success("文件上传成功");
      });
    },
  },
  computed: {
    cardStyle() {
      return {
        borderRadius: "15px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      };
    },
  },
};
</script>

<style scoped>
/* 页面整体背景色 */
body {
  font-family: "Arial", sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

/* Ant Design Card 样式 */
a-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* 上传按钮 */
a-upload .ant-btn-primary {
  width: 100%;
  height: 50px;
  font-size: 16px;
  border-radius: 8px;
}

a-upload .ant-btn-primary:hover {
  background-color: #1890ff;
  border-color: #1890ff;
}

/* 文件预览区域 */
.preview-container {
  margin-top: 20px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.preview-container h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

/* 单个文件预览项 */
.preview-item {
  margin-bottom: 20px;
}

.preview-image {
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.preview-container p {
  font-size: 16px;
  color: #333;
}

/* 小屏幕适配 */
@media (max-width: 768px) {
  a-col {
    span: 24;
  }
  .preview-container {
    margin-top: 10px;
  }
}
</style>
