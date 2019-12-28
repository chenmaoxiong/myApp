<template>
    <div class="forget">
        <p class="forget_p">找回密码</p>
        <van-cell-group>
            <van-field 
            placeholder="请输入用户名"
            label="+86"
            v-model="phone"
            label-width="50"/>     
            <van-field placeholder="请输入验证码" v-model="code_value">
                <van-button slot="button" size="mini" type="danger" @click="btn_code" class="code">{{code_reg}}</van-button>
            </van-field>
            <van-field placeholder="请输入新密码" v-model="upwd" type="password" />
            <van-field placeholder="请再次输入新密码" v-model="cpwd" type="password" />
        </van-cell-group>
        <div class="btn">
            <van-button size="large" color="#d92e31" round @click="forget">确认修改</van-button>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    data(){
        return{
            code_reg:1375,
            phone:'',
            upwd:'',
            cpwd:'',
            code_value:'',
        }
    },
    methods:{
        btn_code(){
            this.code_reg=`${parseInt(Math.random()*10)}${parseInt(Math.random()*10)}${parseInt(Math.random()*10)}${parseInt(Math.random()*10)}`            
        },
        forget(){
            var obj = {phone:this.phone,upwd:this.upwd};
            // console.log(obj)
            var reg_phone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
            var reg_upwd = /^\w{8,16}$/;
            if(!reg_phone.test(this.phone)){
                this.$toast('手机格式不正确');
            }else if(!reg_upwd.test(this.upwd)){
                this.$toast('密码格式不正确');
            }else if(this.upwd!==this.cpwd){
                this.$toast('密码不一致');
            }else if(this.code_reg!=this.code_value){
                this.$toast('验证码不正确');
            }else{
                this.axios.put('users/forget',qs.stringify(obj)).then(res =>{
                    // console.log(res);
                    if(res.data.code==3){
                        this.$toast('修改成功');
                        this.$router.push({path:'login'});
                    }else{
                        this.$toast('手机号码错误');
                    } 
                }).catch(err =>{
                    console.log('错误')
                })
            }
        }
    }
}
</script>

<style scoped>
    .forget{ 
        height:550px;       
        padding:70px 40px;
        background-image:url(../assets/img/login_reg/su_background.png);
        background-size:100% 100%;
    }
    .forget_p{
        margin-bottom:50px;
        padding-left:5px;
    }
    .van-cell-group{
        background: transparent;
    }
    .van-cell{
        background:transparent;
    }
    .btn{
        margin-top:30px;
    }
    .van-button--large{
        height:40px;
        line-height: 40px;
    }
    .code{
        letter-spacing:4px;
    }
</style>
