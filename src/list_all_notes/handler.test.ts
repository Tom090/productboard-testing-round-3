import { OperationHandlerTestSetup } from '@trayio/cdk-dsl/connector/operation/OperationHandlerTest';
import { OperationHandlerResult } from '@trayio/cdk-dsl/connector/operation/OperationHandler';
import { listAllNotesHandler } from './handler';
import '@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner';

OperationHandlerTestSetup.configureHandlerTest(listAllNotesHandler, (handlerTest) =>
	handlerTest
		.usingHandlerContext('test')
		.nothingBeforeAll()
		.testCase('should list all notes', (testCase) =>
			testCase
				.givenNothing()
				.when(() => ({ term: 'test' }))
				.then(({ output }) => {
					const outputValue =
						OperationHandlerResult.getSuccessfulValueOrFail(output);
					expect(Array.isArray(outputValue.data)).toBe(true);
				})
				.finallyDoNothing()
		)
		.nothingAfterAll()
);