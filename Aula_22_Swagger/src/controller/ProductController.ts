import { Request, Response } from "express";
import { Route, Tags, Controller, Post, Put, Delete, Body, Res, TsoaResponse, Get, Query } from "tsoa";

import { ProductService } from "../service/ProductService";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ProductEntity } from "../model/entity/ProductEntity";

@Route('product')
@Tags('Product')
export class ProductController extends Controller {
    productService = new ProductService();

    @Post()
    async cadastrarProduto(
        @Body() dto: ProductRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.cadastrarProduto(dto);
            return success(201, new BasicResponseDto('Produto criado com sucesso!', product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Put()
    async atualizarProduto(
        @Body() product: ProductEntity,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const produto = await this.productService.atualizarProduto(product);
            return success(201, new BasicResponseDto('Produto atualizado com sucesso!', produto));
        } catch (error: any) {
            fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Delete()
    async deletarProduto(
        @Body() product: ProductEntity,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<202, BasicResponseDto>
    ) {
        try {
            const produto = await this.productService.deletarProduto(product);
            return success(202, new BasicResponseDto('Produto deletado com sucesso', produto));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get()
    async filtrarProduto(
        @Query() id: String,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) {
        try {
            const produto = await this.productService.filtrarProduto(id);
            return success(200, new BasicResponseDto('Produto encontrado com sucesso!', produto));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };

    @Get('/all')
    async listarTodosProduto(
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ) {
        try {
            const produtos = await this.productService.listarTodosProdutos();
            return success(200, new BasicResponseDto('Produtos listados com sucesso!', produtos));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    };
}
