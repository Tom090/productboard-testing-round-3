export type ListAllNotesOutput = {
	data: Array<{
		id: string;
		title: string;
		content: string;
		created_at: string;
		updated_at: string;
		feature_id?: string;
		company_id?: string;
	}>;
};