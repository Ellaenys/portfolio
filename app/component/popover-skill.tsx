import React from "react";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import {PopoverSkillProps} from "@/app/interface/popoverSkill";

export const PopoverSkill: React.FC<PopoverSkillProps> = ({item})=> {

    return (
        <Card shadow="sm" className="max-w-[300px] bg-transparent">
            <CardHeader className="justify-between">
                <div className="flex gap-3 ico-skill">
                    <Avatar isDisabled={false} color="secondary" radius="md" size="md" src={item.icon} />
                    <div className="flex flex-col items-start justify-center">
                        <h5 className="font-bold text-lg">{item.name}</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-3">
                <p className="text-small pl-px text-foreground/80">
                    {item.description}
                </p>
            </CardBody>
        </Card>
    );
};
