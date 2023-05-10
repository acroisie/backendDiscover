import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class SerializerInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
		console.log("I'm running before the handler", context);
		
		return (next.handle().pipe(
			map((data: any) => {
				console.log("I'm running before the response is sent out", data);
				
			})
		))
	}
}