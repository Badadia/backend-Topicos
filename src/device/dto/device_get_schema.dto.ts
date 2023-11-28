import { IsNotEmpty, IsObject, IsString, IsUUID } from "class-validator"
import { UUID } from "crypto"

export class DeviceGet{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsUUID()
    @IsNotEmpty()
    id: UUID

    @IsUUID()
    @IsNotEmpty()
    group: UUID

    @IsUUID()
    @IsNotEmpty()
    topics: UUID

    @IsUUID()
    @IsNotEmpty()
    type: UUID

    @IsObject()
    @IsNotEmpty()
    attributes: Map<string, string>;
}