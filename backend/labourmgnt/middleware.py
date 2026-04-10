from django.utils.deprecation import MiddlewareMixin
from django.http import HttpResponse


class SimpleCorsMiddleware(MiddlewareMixin):
    """
    Adds CORS headers for the React dev-server origin and handles
    OPTIONS pre-flight requests so the browser doesn't block API calls.
    """

    ALLOWED_ORIGIN = "http://localhost:5173"

    def _add_cors_headers(self, response):
        response["Access-Control-Allow-Origin"] = self.ALLOWED_ORIGIN
        response["Access-Control-Allow-Credentials"] = "true"
        response["Access-Control-Allow-Headers"] = "Content-Type, X-CSRFToken"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        return response

    def process_request(self, request):
        """Short-circuit OPTIONS pre-flight requests immediately."""
        if request.method == "OPTIONS":
            response = HttpResponse(status=204)
            return self._add_cors_headers(response)

    def process_response(self, request, response):
        return self._add_cors_headers(response)