import { OperationHandlerSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerSetup';
import { ProductboardTestingRound3Auth } from '../ProductboardTestingRound3Auth';
import { RetrieveASpecificNoteInput } from './input';
import { RetrieveASpecificNoteOutput } from './output';
import { globalConfigHttp } from '../GlobalConfig';
import { OperationHandlerResult, OperationHandlerError } from '@trayio/cdk-dsl/connector/operation/OperationHandler';

export const retrieveASpecificNoteHandler = OperationHandlerSetup.configureHandler<
	ProductboardTestingRound3Auth,
	RetrieveASpecificNoteInput,
	RetrieveASpecificNoteOutput
>((handler) =>
	handler.withGlobalConfiguration(globalConfigHttp).usingHttp((http) =>
		http
			.get('/notes/:id')
			.handleRequest((ctx, input, request) =>
				request.addPathParameter('id', input.id.toString()).withoutBody()
			)
			.handleResponse((ctx, input, response) =>
				response
					.withErrorHandling(() => {
						if (response.getStatusCode() === 404) {
							return OperationHandlerResult.failure(
								OperationHandlerError.userInputError('Note not found')
							);
						}
						return OperationHandlerResult.failure(
							OperationHandlerError.apiError(`API error: ${response.getStatusCode()}`)
						);
					})
					.parseWithBodyAsJson()
			)
	)
);