import type { ComponentType, ReactNode } from "react";

export function NotFound({ icon: Icon, children }: { icon: ComponentType<{ variant: "duoStroke" }>; children: ReactNode }) {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center opacity-80 text-slate-400 gap-2 text-xl">
			<div className="[&_svg]:size-100 text-slate-800">
				<Icon variant="duoStroke" />
			</div>
			{children}
		</div>
	);
}