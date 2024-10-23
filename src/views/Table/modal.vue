<template>
    <div>
        <a-modal title="Title" :visible="value" @ok="handleOk" @cancel="handleCancel">
            <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange, onSelect: onSelect }"
                :columns="columns" :data-source="dataList" :pagination="false" row-key="id">
            </a-table>

            <a-pagination :current="pagination.current" :total="pagination.total" :pageSize="pagination.pageSize"
                show-size-changer @change="handleTableChange" @showSizeChange="showSizeChange" />
        </a-modal>
    </div>
</template>
<script>
import { getList } from '../../api/index';

export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        selectedData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            dataList: [],
            pagination: {
                current: 1,
                pageSize: 5,
                total: 0,
            },
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: 'Sex',
                    dataIndex: 'sex',
                    key: 'sex',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            selectedRowKeys: [],
            allSelectedRows: [],

        };
    },
    mounted() {
        console.log(this.value);
        console.log('modal  mounted');
        this.getList()
        this.allSelectedRows = [... this.selectedData]
        this.selectedRowKeys = this.selectedData.map(el => el.id)

    },
    methods: {
        handleOk() {
            this.$emit('confirmSelect', this.allSelectedRows);
            this.$emit('input', false);

        },
        handleCancel() {
            this.$emit('input', false);
        },

        onSelectChange(selectedRowKeys, selectedRow) {
            this.selectedRowKeys = selectedRowKeys;
            console.log('Selected Row Keys: ', selectedRowKeys);
        },
        async getList() {
            try {
                let params = {
                    page: this.pagination.current,
                    pageSize: this.pagination.pageSize
                }
                const res = await getList(params)
                const { data, totalPages, pageSize } = res.data;
                this.dataList = data;
                this.pagination.total = 100

            } catch (error) {
                console.log(error);
            }
        },

        handleTableChange(current) {
            this.pagination.current = current
            this.getList();
        },
        showSizeChange(current, pageSize) {
            this.pagination.pageSize = pageSize
            this.getList();

        },
        onSelect(record, selected) {
            let index = this.allSelectedRows.findIndex(el => el.id == record.id)
            if (index == -1 && selected) {
                this.allSelectedRows.push(record)
            } else {
                this.allSelectedRows.splice(index, 1)
            }
            console.log('this.allSelectedRows', this.allSelectedRows);
        }
    },
    created() {
    },
};
</script>