import { ComponentType, lazy, LazyExoticComponent } from "react";

function componentLoader(
  lazyComponent: any,
  attemptsLeft: number,
): Promise<{ default: ComponentType<any> }> {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error: any) => {
        setTimeout(() => {
          if (attemptsLeft === 1) {
            if (window.confirm("Erro ao carregar página. Deseja atualizar?")) {
              window.location.reload();
            } else {
              reject(error);
              return;
            }
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(
            resolve,
            reject,
          );
        }, 1500);
      });
  });
}

export interface ComponentWithPreload extends LazyExoticComponent<any> {
  preload?: () => void;
}

export default function importPage(lazyComponent: any) {
  const importStatement = () => componentLoader(lazyComponent, 2);
  const Component: ComponentWithPreload = lazy(importStatement);
  Component.preload = importStatement;

  return Component;
}
