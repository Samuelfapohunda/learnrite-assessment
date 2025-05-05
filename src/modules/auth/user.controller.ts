import {
   Controller,
   Post,
   Body,
   HttpCode,
   HttpStatus,
   UseGuards,
   Get,
 } from '@nestjs/common';
 import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
 import { UserService } from './user.service';
 import { RegisterDto, LoginDto, RefreshTokenDto } from 'src/common/dtos/auth.dto';
 import { IServiceResponse } from '../../common/interfaces/http-response.interface';
import { GetCurrentUserId } from 'src/common/decorators/getCurrentUserId.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
 
 @ApiTags('user')
 @Controller('user')
 export class UserController {
   constructor(private readonly userService: UserService) {}
 
   @Post('register')
   @HttpCode(HttpStatus.CREATED)
   @ApiOperation({ summary: 'Register a new user' })
   @ApiResponse({ status: 201, description: 'User successfully registered' })
   @ApiResponse({ status: 400, description: 'Bad Request' }) 
   async register(@Body() data: RegisterDto): Promise<IServiceResponse> {
     return this.userService.register(data);
   }
 
   @Post('login')
   @HttpCode(HttpStatus.OK)
   @ApiOperation({ summary: 'Login a user' })
   @ApiResponse({ status: 200, description: 'User successfully logged in' })
   @ApiResponse({ status: 502, description: 'Invalid email or password' })
   async login(@Body() data: LoginDto): Promise<IServiceResponse> {
     return this.userService.login(data);
   }
 
   @Get('')
   @HttpCode(HttpStatus.OK)
   @UseGuards(AuthGuard)
   @ApiOperation({ summary: 'Get all users' })
   async refreshToken(
   ): Promise<IServiceResponse> {
     return this.userService.getUsers();
   }
 }
 