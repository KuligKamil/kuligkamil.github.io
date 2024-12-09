from copier_templates_extensions import ContextHook
from datetime import datetime

class ContextUpdater(ContextHook):
    def hook(self, context: dict) -> dict:
        print(context)
        if context.get("date") == '':
            context["date"] = datetime.now().strftime('%Y-%m-%d') 
        return context