const supertest = require('supertest');
const app = require('../controllers/userController');  
const { request } = require('express');
const router = require('../controllers/productController');
const { expect } = require('chai');


describe('get',()=>{
    it('returns status 200 if it find the user',async(req,res)=>{
        const res= await request(router).get('/get').send({name:"amira"});
        expect(res.statusCode).toEqual(201);
    });
});
