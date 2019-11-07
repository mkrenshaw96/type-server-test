import { Param, Body, JsonController, Get } from 'routing-controllers';
@JsonController()
export class UserController {
	@Get('/users')
	getAll() {
		return 'This action returns all users';
	}
	@Get('/user/:id')
	getOne(@Param('id') id: number) {
		return 'This action returns user #' + id;
	}
}
