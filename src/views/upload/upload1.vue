<template>
  <el-upload
    class="upload-demo"
    action=""
    :http-request="uploadFiles"
    :before-upload="beforeUpload"
    :on-success="handleSuccess"
    :on-error="handleError"
    :file-list="fileList"
    multiple
  >
    <el-button slot="trigger" type="primary">Select File</el-button>
    <el-button style="margin-left: 10px" type="success" @click="submitUpload"
      >Upload</el-button
    >
  </el-upload>
</template>

<script>
import axios from "axios";
import { uploadFile } from "@/api/index.js";

export default {
  name: "FileUpload",
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    beforeUpload(file) {
      this.fileList.push(file);
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
