'use client';

import IconButton from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Check, Copy, Link } from "lucide-react";
import { useState } from "react";

interface InviteLinkInputProps {
    inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    const [linkCopied, setLinkCopied] = useState<boolean>(false);

    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink);
        setLinkCopied(true);

        setTimeout(() => {
            setLinkCopied(false);
        }, 300);
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link />
            </InputIcon>
            <InputField readOnly defaultValue={inviteLink} />

            <IconButton className="-mr-2" onClick={copyInviteLink}>
                { !linkCopied ? <Copy className="size-5" /> : <Check className="size-5" /> }
            </IconButton>
        </InputRoot>
    );
}