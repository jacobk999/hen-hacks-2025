import { z } from "zod";

export interface AiMediaProvider<Query, Resource> {
	getByQuery(query: Query): Promise<Resource | undefined>;
	querySchema(): z.ZodType<Query>;
}


