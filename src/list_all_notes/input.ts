export type ListAllNotesInput = {
	/**
	 * @title Search Term
	 * @description Search term to find specific notes
	 */
	term: string;
	/**
	 * @title Feature ID
	 * @description If specified, the resource returns only notes for specific feature ID or its descendants
	 */
	featureId?: string;
	/**
	 * @title Company ID
	 * @description Returns only notes for specific company ID
	 */
	companyId?: string;
	/**
	 * @title Page Cursor
	 * @description Will be used to retrieve the next page of notes
	 * @advanced true
	 */
	pageCursor?: string;
};