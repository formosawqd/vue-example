<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      action=""
      :http-request="uploadFiles"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
      :file-list="fileList"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-button style="margin-left: 10px" type="success" @click="submitUpload"
      >Upload</el-button
    >
    <!-- 这里为了展示以下上传文件的信息 -->
    <!-- <div v-if="fileInfo">
      <p>File Name: {{ fileInfo.name }}</p>
      <p>File Size: {{ fileInfo.size }} bytes</p>
      <p>File Type: {{ fileInfo.type }}</p>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import { uploadFile } from "@/api/index.js";

export default {
  name: "FileUpload",
  data() {
    return {
      fileList: [],
      fileInfo: null, // Store the selected file info
    };
  },
  methods: {
    beforeUpload(file) {
      this.fileList.push(file);
      //   this.fileInfo = {
      //     name: file.name,
      //     size: file.size,
      //     type: file.type,
      //   };
      return false; // 取消默认上传行为
    },
    uploadFiles() {
      if (!this.fileList.length) {
        this.$message.error("请先选择文件");
        return;
      }
      const formData = new FormData();
      this.fileList.forEach((el) => {
        formData.append("files", el);
      });
      uploadFile(formData).then((res) => {
        console.log(res);
        this.$message.success("文件上传成功");
      });
    },
    handleSuccess(response, file, fileList) {
      console.log("Success:", response);
    },
    handleError(err, file, fileList) {
      console.error("Error:", err);
    },
    submitUpload() {
      this.uploadFiles();
    },
  },
};
</script>

<style>
.upload-demo {
  width: 300px;
  margin: 50px auto;
}
</style>
