var myCalculator = new Vue({
    el: '#myVueCalculator',
    data: {
        inputData: '',
        tempData : 0,
        inputExpression: '',
        actionMethod: ''
    },
    methods: {
        Add: function (e) {
            this.actionMethod = 'A';
            this.tempData += parseInt( this.inputData);
            this.inputExpression = this.inputExpression + ' ' + this.inputData + '+';
            this.inputData = '';
        },
        Substract: function (e) {
            this.actionMethod = 'S';
            this.tempData -= parseInt(this.inputData);
            this.inputExpression = this.inputExpression + ' ' + this.inputData + '-';
            this.inputData = '';
        },
        Multiply: function (e) {
            this.actionMethod = 'M';
            if (this.tempData == 0) {
                this.tempData = 1;
            }
            this.tempData *= parseInt(this.inputData);
            this.inputExpression = this.inputExpression + ' ' + this.inputData + '*';
            this.inputData = '';
        },
        Divide: function (e) {
            this.actionMethod = 'D';
            if (this.tempData == 0) {
                this.tempData = parseInt(this.inputData);
            }
            else {
                this.tempData = this.tempData / parseInt(this.inputData);
            }
            this.inputExpression = this.inputExpression + ' ' + this.inputData + '/';
            this.inputData = '';
        },
        Clear: function (e) {
            this.inputData = '';
            this.tempData = 0;
            this.inputExpression = '';
        },
        Total: function (e) {
            switch (this.actionMethod) {
                case "A":
                    this.inputExpression = this.inputExpression + '   = ' + this.tempData;
                    break;
                case "S":
                    this.inputExpression = this.inputExpression + '   = ' + this.tempData;
                    break;
                case "M":
                    this.tempData = this.tempData * parseInt(this.inputData);
                    this.inputExpression = this.inputExpression + '   = ' + this.tempData;
                    break;
            }

            this.inputData = '';
        }
    }
})