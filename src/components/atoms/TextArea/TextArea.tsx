import type { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export function TextArea({ label, id, className = "", ...rest }: TextAreaProps) {
    const textAreaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className={className}>
            {label && <label htmlFor={textAreaId}>{label}</label>}
            <textarea id={textAreaId} className="form-control" {...rest} />
        </div>
    );
}
