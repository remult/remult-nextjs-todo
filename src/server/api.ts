import { BackendMethod, Entity, Fields, Validators } from 'remult';
import { remultMiddleware } from 'remult/remult-middleware';



@Entity("tasks", {
    allowApiCrud: true
})
export class Task {
    @Fields.uuid()
    id!: string;

    @Fields.string({
          validate: Validators.required 
    })
    title = '';

    @Fields.boolean()
    completed = false;
    @BackendMethod({ allowed: false })
    static testForbidden() {
    }
}

export const api = remultMiddleware({
    entities:[Task],
    bodyParser: false
});