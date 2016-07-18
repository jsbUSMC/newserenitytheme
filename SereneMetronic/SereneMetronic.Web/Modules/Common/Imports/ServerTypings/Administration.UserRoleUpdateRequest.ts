namespace SereneMetronic.Administration {
    export interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number
        Roles?: number[]
    }
}

