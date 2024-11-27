<template>
  <el-upload
    class="upload-demo"
    action=""
    :http-request="uploadFiles"
    :before-upload="beforeUpload"
    :on-success="handleSuccess"
    :on-error="handleError"
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
      file: null,
    };
  },
  methods: {
    beforeUpload(file) {
      this.file = file;
      return false; // 取消默认上传行为
    },
    uploadFiles() {
      if (!this.file) {
        this.$message.error("No file selected for upload.");
        return;
      }
      const formData = new FormData();

      formData.append("file", this.file);

      uploadFile(formData).then((res) => {
        console.log(res);
        this.$message.success("File uploaded successfully");
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
