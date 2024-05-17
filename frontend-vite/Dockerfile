FROM node:20-alpine as builder
WORKDIR /frontend-vite
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine as production
WORKDIR /frontend-vite
COPY --from=builder /frontend-vite/dist ./dist
COPY --from=builder /frontend-vite/node_modules ./node_modules
COPY package.json .
CMD ["node", "./dist"]