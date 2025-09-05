import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
	server: {
		FREE_TO_GAME_API_ENDPOINT: z.url(),
	},
	clientPrefix: "VITE_",

	client: {},
	//@ts-ignore
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
