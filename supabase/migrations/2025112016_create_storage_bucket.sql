begin;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('community', 'community', true, 52428800, ARRAY['image/jpeg','image/png','image/gif','image/webp','audio/mpeg','audio/wav','audio/ogg','application/pdf','text/plain','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']);

commit;